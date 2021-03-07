export default function CourseCover() {
  return (
    <div className="rounded-lg">
      <div
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/814499/pexels-photo-814499.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260')",
        }}
        className="h-96 bg-gray-200 bg-cover bg-center flex"
      >
        <div className="flex flex-col justify-center bg-gray-900 opacity-80 h-full w-full px-8">
          <p className="text-white font-bold text-4xl">
            Getting Started with GitHub Actions
          </p>
          <p className="text-white">by Aaron Stewart</p>

          <p className="text-white max-w-2xl py-8">
            Learn how to automate, customize, and execute your software
            development workflows right in your GitHub repository with GitHub
            Actions.
          </p>

          {/* <p className="text-white text-xs">
            This course is not part of your current subscription.
          </p> */}

          <button className="mt-4 w-36 h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none">
            Join Course
          </button>
        </div>
      </div>
    </div>
  );
}
