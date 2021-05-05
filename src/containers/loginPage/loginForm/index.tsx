import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { InputsWrapper, InputWrapper } from './styles';
import { Input, ValidationError, ButtonPrimary } from 'shared/styled-components';

type FormValues = {
  userId: string;
  password: string;
};

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputsWrapper>
        <InputWrapper>
          <Input
            type="text"
            {...register('userId', { required: { message: 'Required', value: true } })}
            placeholder="Store user ID"
            invalid={errors.userId}
          />
          {errors.userId && <ValidationError>{errors.userId.message}</ValidationError>}
        </InputWrapper>
        <InputWrapper>
          <Input
            type="password"
            {...register('password', { required: { message: 'Required', value: true } })}
            placeholder="Password"
            invalid={errors.password}
          />
          {errors.password && <ValidationError>{errors.password.message}</ValidationError>}
        </InputWrapper>
      </InputsWrapper>
      <ButtonPrimary type="submit">Log in</ButtonPrimary>
    </form>
  );
};

export default LoginForm;
