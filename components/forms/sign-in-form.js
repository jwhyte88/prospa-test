import { useState } from 'react'
import { useForm } from 'react-hook-form'

const IndexPage = (props) => {
  const [user, setUser] = useState()
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm()
  const onSubmit = ({ email, password }) => {
    setUser({ name: email })
  }

  return (
    <div className="form-container sign-form__signup">
      {user ? (
        <span className="hello-user">Hello, {user.name}!</span>
      ) : (
        <>
          {props.title &&
            <div className="form-container__title">{props.title}</div>
          }

          {props.subtitle &&
            <div className="form-container__subtitle">{props.subtitle}</div>
          }

          <form onSubmit={handleSubmit(onSubmit)}>

            <div className="form-row">
              <input
                type="text"
                placeholder={props.form.email.placeholder}
                {...register('email', {
                  required: { value: true, message: props.form.email.errorMsgRequired },
                  pattern: { 
                    value: /^\S+@\S+$/i, 
                    message: props.form.email.invalidEmailAddress 
                  },
                  maxLength: {
                    value: 255,
                    message: props.form.email.errorMsgMaxLength,
                  },
                })}
                className={'form-field' + (errors.email ? ' has-error' : '')}
              />
              {errors.email && (
                <span className="error-label">{errors.email.message}</span>
              )}
            </div>

            <div className="form-row">
              <input
                type="password"
                placeholder={props.form.password.placeholder}
                {...register('password', {
                  required: { value: true, message: props.form.password.errorMsgRequired },
                })}
                className={'form-field' + (errors.password ? ' has-error' : '')}
              />
              {errors.password && (
                <span className="error-label">{errors.password.message}</span>
              )}
            </div>

            <div className="form-row">
              <button type="submit" className="btn btn--pink btn--full-width">
                Next
              </button>
            </div>
          </form>
        </>
      )}
    </div>
  )
}

export default IndexPage
