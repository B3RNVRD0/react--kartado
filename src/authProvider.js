const AuthProvider = {
  // chamado quando o usuário tenta fazer o login

  login: ({ username }) => {
    localStorage.setItem('username', username)

    //aceitar todas as combinações de nome de usuário/palavra-passe
    return Promise.resolve()
  },
  // chamado quando o usuário clica no botão de logout
  logout: () => {
    localStorage.removeItem('username')
    return Promise.resolve()
  },
  // chamado quando a API retorna um erro
  checkError: ({ status }) => {
    if (status === 401 || status === 403) {
      localStorage.removeItem('username')
      return Promise.reject()
    }
    return Promise.resolve()
  },
  // chamado quando o usuário navega para um novo local, para verificar a autenticação
  checkAuth: () => {
    return localStorage.getItem('username')
      ? Promise.resolve()
      : Promise.reject()
  },
  // chamado quando o usuário navega para um novo local, para verificar as permissões / funções
  getPermissions: () => Promise.resolve()
}

export default AuthProvider
