import { useState } from 'react'
import { useForm } from 'react-hook-form'

const IndexPage = (props) => {
  const [user, setUser] = useState()
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm()
  const onSubmit = ({ firstname, lastname, countryCode, mobile, email }) => {
    setUser({ name: firstname })
  }

  return (
    <div className="form-container sign-form__signup">
      {user ? (
        <span className="hello-user">Hello, {user.name}!</span>
      ) : (
        <>
          {props.stepOneTitle &&
            <div className="form-container__title">{props.stepOneTitle}</div>
          }

          {props.stepOneSubtitle &&
            <div className="form-container__subtitle">{props.stepOneSubtitle}</div>
          }

          <form onSubmit={handleSubmit(onSubmit)}>

            <div className="form-row">
              <input
                type="text"
                placeholder={props.form.firstName.placeholder}
                {...register('firstname', {
                  required: { value: true, message: props.form.firstName.errorMsgRequired },
                  maxLength: {
                    value: 30,
                    message: props.form.firstName.errorMsgMaxLength,
                  },
                })}
                className={'form-field' + (errors.firstname ? ' has-error' : '')}
              />
              {errors.firstname && (
                <span className="error-label">{errors.firstname.message}</span>
              )}
            </div>

            <div className="form-row">
              <input
                type="text"
                placeholder={props.form.lastName.placeholder}
                {...register('lastname', {
                  required: { value: true, message: props.form.lastName.errorMsgRequired },
                  maxLength: {
                    value: 30,
                    message: props.form.lastName.errorMsgMaxLength,
                  },
                })}
                className={'form-field' + (errors.lastname ? ' has-error' : '')}
              />
              {errors.lastname && (
                <span className="error-label">{errors.lastname.message}</span>
              )}
            </div>

            <div className="form-row">
              <div className="form-row__countrycode">
                <select {...register("countryCode", { required: true })}>
                  <option value="+233">+233</option>
                  <option value="+244">+244</option>
                  <option value="+44">+44</option>
                </select>
              </div>

              <div className="form-row__mobile">
                <input
                  type="tel"
                  placeholder={props.form.mobileNumber.placeholder}
                  {...register('mobile', {
                    required: { value: true, message: props.form.mobileNumber.errorMsgRequired },
                    minLength: {
                      value: 6,
                      message: props.form.mobileNumber.errorMsgMinLength,
                    },
                    maxLength: {
                      value: 12,
                      message: props.form.mobileNumber.errorMsgMaxLength,
                    },
                  })}
                  className={'form-field' + (errors.mobile ? ' has-error' : '')}
                />
              </div>
              {errors.mobile && (
                <span className="error-label">{errors.mobile.message}</span>
              )}
            </div>
          
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
