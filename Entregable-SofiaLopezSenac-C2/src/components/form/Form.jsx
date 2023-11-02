import styles from '../form/form.module.css'
import { useState } from 'react'


function Form(props) {
    const [name, setName] = useState('')
    const [raza, setRaza] = useState('')
    const [error, setError] = useState('')
    const [errorPerro, setErrorPerro] = useState('')
    

        function handlerSubmit(e) {
            e.preventDefault()

            
            let hasSomeError = false
            if (name.length <= 3) {
                setError('Minimo 3 caracteres, Por favor chequear que la información sea correcta')
                hasSomeError = true
            } else {
                setError()
            }
                    
            if (raza.length < 6) {
                hasSomeError = true
                setErrorPerro('Minimo 6 caracteres, Por favor chequear que la información sea correcta')
            } else {
                setErrorPerro()
            }

            if (hasSomeError) {
                return 
            }

    

        props.onSubmit({name: name, raza: raza})
        }  

            function handlerChangeName(e) {
                setName(e.target.value)
                
            }

            function handlerChangeRaza(e) {
                setRaza(e.target.value)
        
    }

    return (
        <>
            <form className={styles.father} onSubmit={handlerSubmit}>

                <label htmlFor="nombre">Ingrese su nombre</label>

                <input 
                    type="text" 
                    id="nombre" 
                    placeholder='Nombre' 
                    value={name} 
                    onChange={handlerChangeName}
                />

                {error ? <span>{error}</span> : undefined}

                <label htmlFor="razaPerro">Ingrese su raza de perro preferida</label>

                <input 
                    type="text" 
                    id="razaPerro" 
                    placeholder='Raza de perro' 
                    value={raza} 
                    onChange={handlerChangeRaza}
                />

                {errorPerro ? <span>{errorPerro}</span> : undefined}


                <button type="submit">Enviar</button>
            </form>

                
        </>
    )
}

export default Form