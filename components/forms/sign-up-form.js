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
    setUser({ name: username })
  }

  console.log('\n\n\n props', props)

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

            <div className="row">
              <input type="text" placeholder="First name" {...register("firstname", {required: true, minLength: { value: 1, message: 'First name cannont be less than 1 character'}, maxLength: 80})} />
              {errors.firstname && (
                <span className="error-label">{errors.firstname.message}</span>
              )}
            </div>
            
            <div className="row">
               <input type="text" placeholder="Last name" {...register("lastname", {required: true, minLength: { value: 1, message: 'Last name cannont be less than 1 character'}, maxLength: 80})} />
              {errors.lastname && (
                <span className="error-label">{errors.lastname.message}</span>
              )}
            </div>

            <div className="row">
              <select {...register("countryCode", { required: true })}>
                <option value="+233">+233</option>
                <option value="+244">+244</option>
              </select>

              <input type="tel" placeholder="Mobile number" {...register("mobile", {required: true, minLength: 6, maxLength: 12})} />
            </div>
          
            <div className="row">
              <input type="text" placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
            </div>


            <div className="row">
              <button type="submit" className="btn login-btn">
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
