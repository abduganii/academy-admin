/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, ReactNode } from "react";
import { Form, Formik, FormikProps } from "formik";
import { isFunction } from "lodash";
import { formHelpers } from "../formHelpers.ts";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { AddData, UpdateData, UpdateDataOne } from "../../service/global.ts";
import { useDispatch } from "react-redux";
import { changeDirty } from "../../redux/dirty.ts";
import { useTranslation } from "react-i18next";
interface IFORMCONTAINER {
  url: string;
  formik?: FormikProps<any>;
  formProps?: any;
  children: (formik: FormikProps<any>) => ReactNode;
  isFormData?: boolean;
  fields?: any;
  normalizeData?: any;
  axiosConfig?: any;
  onSuccess?: any;
  onError?: any;
  onFinal?: any;
  customData?: any;
  onSubmit?: any;
  validateOnMount?: boolean;
  validate?: any;
  setLoader?: any;
  madalId?:string | number | boolean
}
export const FormContainer: FC<IFORMCONTAINER> = ({
  url,
  children,
  isFormData,
  fields,
  onSuccess,
  onError,
  onFinal,
  customData,
  onSubmit,
  madalId,
  setLoader,
  validateOnMount = false,
  ...formProps
}) => {
  const {t} = useTranslation()
  const { id } = useParams();
  const dispatch: any = useDispatch();
  const { initialValues, validationSchema } =
    formHelpers.createFormSchema(fields);

  const handleSubmit = async (values: any, formikHelper: any) => {
    const formValues = formHelpers.getFormValues(values, fields, isFormData);
  
    setLoader(true);
    dispatch(changeDirty(false))
    if ((madalId || id) == "new" || !(madalId || id)) {
      await AddData(url, formValues)
        .then((res: any) => {
          if (res?.status == "200" || res?.status == "201") {
            toast.success(t('seccessfully-created'));
            formikHelper.resetForm();
            onSuccess(res);
          }
        })
        .catch((errors) => {
          onError(errors);
        })
        .finally(() => {
          onFinal();
          setLoader(false);
        });
    } else if ((madalId || id) == "old") {
      await UpdateDataOne(url, formValues)
        .then((res: any) => {
          if (res?.status == "200" || res?.status == "201") {
            toast.success(t("seccessfully-update"));
            onSuccess(res);
          }
        })
        .catch((errors) => {
          onError(errors);
        })
        .finally(() => {
          onFinal()
          setLoader(false)
        });
    } else {
      await UpdateData(url, formValues, (madalId || id))
        .then((res: any) => {
          if (res?.status == "200" || res?.status == "201") {
            toast.success(t("seccessfully-update"));
            onSuccess(res);
          }
        })
        .catch((errors) => {
          onError(errors);
        })
        .finally(() => {
          onFinal()
          setLoader(false)
        });
    }
  };

  const ChangeDirty = (e:boolean)=>{
    dispatch(changeDirty(e))
  }
  return (
    <>
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      validateOnMount={validateOnMount}
      onSubmit={async (value: any, formikHelper: any) => {
        if (customData) {
          isFunction(onSubmit)
            ? onSubmit(customData(value))
            : await handleSubmit(customData(value), formikHelper);
        } else {
          isFunction(onSubmit)
            ? onSubmit(value)
            : await handleSubmit(value, formikHelper);
        }
      }}
      enableReinitialize={true}
    >
      {(formik) => {
         ChangeDirty(formik.dirty)
       
        return <Form {...formProps}>{children(formik)}</Form>;
      }}
    </Formik>
  </>
  );
};