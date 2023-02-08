import { useEffect, useMemo, useState } from 'react';

export const useForm = ( initialForm = {},validateForm={}) => {
  
    const [ formState, setFormState ] = useState( initialForm );
    const [formValidation, setformValidation] = useState({})

    useEffect(() => {
      createValidators();
    }, [formState]);

    useEffect(() => {
      setFormState(initialForm);
    }, [initialForm]);
    

    const isFormValid=useMemo(()=>{
        for (const formValue of Object.keys(formValidation)) {
            if(formValidation[formValue] !==null) return false;
        }
        return true;
    },[formValidation]);
    
    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        });
    }

    const onResetForm = () => {
        setFormState( initialForm );
    }
 
    //NO ENTENDI ESTE CODIGO GAAAA
    //pero con esto valido mi registro
    const createValidators=()=>{
        const formCheckedValues={};

        for (const formField of Object.keys(validateForm)) {
            const [ fn, errorMessage='este campo es requerido']= validateForm[formField];
            formCheckedValues[`${formField}Valid`]= fn(formState[formField])? null :errorMessage;
        }
        setformValidation(formCheckedValues);
        
    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,

        ...formValidation,
        isFormValid,
    }
}