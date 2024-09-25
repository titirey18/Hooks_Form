import './App.css'
import { useForm } from 'react-hook-form'

const App = () => {
  const { register, handleSubmit, formState } = useForm({
    defaultValues: {
      userName: '',
      email: '',
      password: ''
    }
  })

  const submit = (formData) => {
    console.log(formData)
  }

  return (
    <form onSubmit={handleSubmit(submit)}>
      <div>
        <label htmlFor='userName'>Nombre de usuario</label>
        <input
          type='text'
          {...register('userName', {
            required: {
              value: true,
              message: 'El nombre de usuario es requerido'
            }
          })}
        />
        {formState.errors.userName && (
          <p style={{ color: 'red' }}>{formState.errors.userName.message}</p>
        )}
      </div>
      <div>
        <label>Email</label>
        <input
          type='text'
          {...register('email', {
            required: true,
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
              message: 'Ingrese un email válido❌ '
            }
          })}
        />
        {formState.errors.email && (
          <p style={{ color: 'red' }}>{formState.errors.email.message}</p>
        )}
      </div>
      <div>
        <label>Contraseña</label>
        <input
          type='password'
          {...register('password', {
            required: true,
            pattern: {
              value: /^[0-9]{8}[A-Za-z]$/,
              message:
                'La contraseña debe incluir números, letras Mayúsculas y minúsculas y como máximos 8 caracteres'
            }
          })}
        />
        {formState.errors.password && (
          <p style={{ color: 'red' }}>{formState.errors.password.message}</p>
        )}
      </div>
      <button>Registrar</button>
    </form>
  )
}

export default App
