class LoginController {
  handle (httpRequest) {
    if (!httpRequest) {
      return {
        statusCode: 500
      }
    }
    const { email, password, confirmPassword } = httpRequest.body
    if (!email || !password || !confirmPassword) {
      return {
        statusCode: 400
      }
    }
  }
}
describe('Login Router', () => {
  test('should return 400 if no email is provided', () => {
    const sut = new LoginController()
    const httpRequest = {
      body: {
        password: 'any_password'
      }
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
  })

  test('should return 400 if no password is provided', () => {
    const sut = new LoginController()
    const httpRequest = {
      body: {
        email: 'any_email@email.com'
      }
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
  })
  test('should return if no confirmPassword is provided', () => {
    const sut = new LoginController()
    const httpRequest = {
      body: {
        email: 'any_email@email.com',
        password: 'any_password'
      }
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
  })

  test('should return if no httpRequest is provided', () => {
    const sut = new LoginController()
    const httpResponse = sut.handle()
    expect(httpResponse.statusCode).toBe(500)
  })
})
