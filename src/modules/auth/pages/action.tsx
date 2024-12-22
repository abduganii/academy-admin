import { Button } from "antd";
import { FormContainer } from "../../../components/Forms";
import GlobalInput from "../../../components/global-input";
import { useState } from "react";
import { Store } from "../../../utils/storage";
import { useDispatch } from "react-redux";
import { HandleAuth } from "../../../redux/auth";
import { useNavigate } from "react-router-dom";

export default function ActionPage() {
   const [loader, setLoader] = useState<boolean>(false);
   const  dispatch = useDispatch()
   const navigate = useNavigate() 
  return (
    <div>
       <FormContainer
              url={"auth/login"}
              isFormData={false}
              setLoader={setLoader}
              fields={[
                {
                  name: "email",
                  validationType:"string",
                  validations: [{ type: "required" }],
                  value: '',
                },
                {
                  name: "password",
                  validationType:"string",
                  validations: [{ type: "required" }],
                  value:  '',
                }]}
              onSuccess={(e:any) => {
                Store.setToken(e?.data?.data?.token)
                dispatch(HandleAuth(e?.data?.data?.token))
                navigate("/books");
              }}
              onError={(e: any) => {
                console.log(e, "onError");
              }}
              onFinal={() => {
                setLoader(false);
              }}
              validateOnMount={false}
            >
              {(formik) => {
               
                return (
                  <>
                   <div className="p-4">
                    <div className="w-full p-[24px] min-h-[500px]  bg-white rounded-lg">
                      <div className="w-full max-w-[504px]">
                        <GlobalInput
                          type="text"
                          formik={formik}
                          value={formik.values.email}
                          label={"email"}
                          name={`email`}
                          id={"email"}
                          placeholder={'email'}
                          className={"mb-4 colm1"}
                          errors={formik.errors.email}
                          required={true}
                        />
                        
                          <GlobalInput
                            type="text"
                            formik={formik}
                            value={formik.values.password}
                            label={"password"}
                            name={`password`}
                            id={"password"}
                            typeValue='password'
                            placeholder={'password'}
                            className={"mb-4 colm1"}
                            errors={formik.errors.password}
                          />
                          
                          <Button type="primary" loading={loader} size="large" htmlType="submit" >Сохранить</Button>
                      </div>
                    </div>
                  </div>
                  </>
                );
              }}
            </FormContainer>
    </div>
  )
}
