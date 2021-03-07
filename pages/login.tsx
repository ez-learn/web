export default function Login() {
  return (
    <>
      <div className="container flex flex-col max-w-md p-6 mx-auto rounded-md sm:p-10 bg-coolGray-50 text-coolGray-800">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Sign in</h1>
          <p className="text-sm text-coolGray-600">
            Sign in to access your account
          </p>
        </div>
        <form
          action=""
          className="space-y-12 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="leroy@jenkins.com"
                className="w-full px-3 py-2 border rounded-md border-coolGray-300 bg-coolGray-50 text-coolGray-800"
              />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <label htmlFor="password" className="text-sm">
                  Password
                </label>
                <a
                  href="#"
                  className="text-xs hover:underline text-coolGray-600"
                >
                  Forgot password?
                </a>
              </div>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="*****"
                className="w-full px-3 py-2 border rounded-md border-coolGray-300 bg-coolGray-50 text-coolGray-800"
              />
            </div>
          </div>
          <div className="space-y-2">
            <div>
              <button
                type="button"
                className="w-full px-8 py-3 rounded-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none text-white"
              >
                Sign in
              </button>
            </div>
            <p className="text-sm text-center text-coolGray-600">
              Don't have an account yet?
              <a href="#" className="hover:underline text-violet-600">
                Sign up
              </a>
              .
            </p>
          </div>
        </form>
      </div>
    </>
  );
}
