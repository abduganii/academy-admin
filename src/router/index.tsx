import { Routes, Route } from "react-router-dom";
import { Fragment } from "react";
import  AuthRoute  from "../modules/auth/route";
import MainLayout from "../layouts/main-layout/index";
import NotFound from "../NotFound";

interface Imeta {
    role: Set<string>;
    isLoginIf: boolean
}

interface IRouter {
    url: string;
    Element: React.ComponentType;
    children?: IRouter[];
    meta?: Imeta;
    hideIfchildern?: boolean;
}

const dynimicImportRoutes = import.meta.glob('../modules/**/route.ts',{eager: true}) as Record<string, {default: IRouter[]}>

const router :IRouter[] = []


Object.values(dynimicImportRoutes).forEach(el=>{
    router.push(...el.default)
})


const nestedRoutes = (routes: IRouter[]) =>
    routes.map(({ Element, url, children ,meta}: IRouter) => {
        if(meta?.isLoginIf){
            if (children?.length ) {
                return (
                    <Fragment key={url}>
                        <Route path={url} element={<Element />} />
                        {nestedRoutes(children)}
                    </Fragment>
                );
            }
            return <Route key={url} path={url} element={<Element />} />;
        }
    });

export const AuthorizedRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                {nestedRoutes(router)}
            </Route>
            <Route path="/*" element={<NotFound />} />
        </Routes>
    );
};

export const UnAuthorizedRoutes = () => (
    <Routes>
        {AuthRoute.map(({ Element, url }: IRouter) => (
            <Route key={url} path={url} element={<Element />} />
        ))}
        <Route path="/*" element={<NotFound />} />
    </Routes>
);
