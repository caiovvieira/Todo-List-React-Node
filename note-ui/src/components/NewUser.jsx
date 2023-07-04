function NewUser(params) {
    return (
        <div>

            <h1>novo usuario</h1>

            <form action="">
                <div><input type="text" name="name" id="nameInput" /></div>
                <div><input type="email" name="email" id="emailInput" /></div>
                <div><input type="password" name="password" id="passwordInput" /></div>

                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}

export default NewUser