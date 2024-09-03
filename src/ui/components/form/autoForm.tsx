import { useToggle } from "@/hooks/use-toggle";
import { BackEndContext, EntityElement } from "@/types/api/context-data";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

export const AutoForm = (
    id: Array<string | number> | string,
    defautVl: any,
    actionApi?: (dataForm: any) => {}
) => {
    const { value: isLoading, setValue: setIsLoading } = useToggle();

    interface formFields {
        textValue: any;
    }

    const formProps = useForm<formFields>();
    const {
        reset,
        getValues,
        setValue,
        formState: { defaultValues },
    } = formProps;

    useEffect(() => {
        if (defaultValues?.textValue === undefined) {
            reset({ textValue: defautVl });
        }
    }, []);

    const onSubmit: SubmitHandler<formFields> = async (formData) => {
        // console.log(getValues("textValue"));
        // console.log(defaultValues?.textValue);
        if (formData.textValue === "") {
            formData.textValue = null;
        }
        if (
            getValues("textValue") !== defaultValues?.textValue ||
            id === "imgData"
        ) {
            let dataForm = {
                id: id,
                value: formData.textValue,
            };
            // if (id === "imgData") {
            //     dataForm = {
            //         id: id,
            //         value: defautVl,
            //     };
            // }
            if (actionApi) {
                setIsLoading(true);
                const ok = await actionApi(dataForm);
                if (ok) {
                    console.log("OK", ok);
                    reset(formData);
                    setIsLoading(false);
                    return;
                }
                reset();
                setIsLoading(false);
                return;
            } else {
                console.log(dataForm);
                return;
            }
        }
    };

    const handleSubmit = formProps.handleSubmit(onSubmit);

    return {
        handleSubmit,
        isLoading,
        formProps,
    };
};
