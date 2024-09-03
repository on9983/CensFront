export interface FormType {
    control: any;
    onSubmit: any;
    errors: any;
    isLoading: boolean;
    register: any;
    handleSubmit: any;
}

export interface FormPropsType {
    formProps: any;
    onSubmit: any;
    isLoading: boolean;
}


export interface LoginFormType {
    email: string;
    password: string;
}

export interface RegisterFormType {
    email: string;
    password: string;
    passwordVerif: string;
}

export interface ForgetPSWFormType {
    email: string;
}

export interface FgtPWDJetonFormType {
    jeton: string;
    password: string;
    passwordVerif: string;
}

export interface ValidationEmailFormType {
}

export interface ValidationEmailJetonFormType {
    jeton: string;
}

export interface AddEspaceFormType {
    nom: string;
    desc: string;
    imgData: string;
}

export interface SourceFormType {
    nom: string;
}