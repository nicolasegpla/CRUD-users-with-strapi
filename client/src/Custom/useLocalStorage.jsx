function useLocalStorage() {

    // con esta arrowfunction guardamos la sesion del usuario enel local Storage y va a recibir la data de useDoLogin de la peticion POST  
    const saveUserSesion = (data) => {
        localStorage.setItem("userSesion", JSON.stringify({
            username: data.user.username,
            jwt: data.jwt,
        }) || "''")
    }

    const getDataUserSesion = () => {
        const dataStringify = localStorage.getItem("userSesion") || '""';
        const dataParse = JSON.parse(dataStringify);
        return dataParse
    }

    const { jwt, username } = getDataUserSesion();

    return {
        saveUserSesion,
        jwt,
        username
    }
}

export { useLocalStorage }