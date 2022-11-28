import React from "react";
import useTitle from "../../Hooks/useTitle";

const Blog = () => {
    useTitle("Blogs");
  return (
    <div>
      <section class="bg-white dark:bg-gray-900">
        <div class="container px-6 py-10 mx-auto">
          <h1 class="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">
            How to Manage State in Your <br /> React Apps
          </h1>

          <div class="mt-2">
            <span class="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
            <span class="inline-block w-3 h-1 ml-1 bg-blue-500 rounded-full"></span>
            <span class="inline-block w-1 h-1 ml-1 bg-blue-500 rounded-full"></span>
          </div>

          <div class="mt-8 xl:mt-12 lg:flex lg:items-center">
            <div class="grid w-full grid-cols-1 gap-8 lg:w-1/2 xl:gap-16 md:grid-cols-2">
              <div class="space-y-3">
                <span class="inline-block p-3 text-blue-500 bg-blue-100 rounded-xl dark:text-white dark:bg-blue-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </span>

                <h1 class="text-2xl font-semibold text-gray-700 capitalize dark:text-white">
                  Local (UI) state
                </h1>

                <p class="text-gray-500 dark:text-gray-300">
                  Local state is data we manage in one or another component.
                  Local state is most often managed in React using the useState
                  hook. For example, local state would be needed to show or hide
                  a modal component or to track values for a form component,
                  such as form submission, when the form is disabled and the
                  values of a form’s inputs.
                </p>
              </div>

              <div class="space-y-3">
                <span class="inline-block p-3 text-blue-500 bg-blue-100 rounded-xl dark:text-white dark:bg-blue-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
                    />
                  </svg>
                </span>

                <h1 class="text-2xl font-semibold text-gray-700 capitalize dark:text-white">
                  Global (UI) state
                </h1>

                <p class="text-gray-500 dark:text-gray-300">
                  Global state is data we manage across multiple components.
                  Global state is necessary when we want to get and update data
                  anywhere in our app, or in multiple components at least. A
                  common example of global state is authenticated user state. If
                  a user is logged into our app, it is necessary to get and
                  change their data throughout our application. Sometimes state
                  we think should be local might become global.
                </p>
              </div>

              <div class="space-y-3">
                <span class="inline-block p-3 text-blue-500 bg-blue-100 rounded-xl dark:text-white dark:bg-blue-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
                    />
                  </svg>
                </span>

                <h1 class="text-2xl font-semibold text-gray-700 capitalize dark:text-white">
                  Server state
                </h1>

                <p class="text-gray-500 dark:text-gray-300">
                  Data that comes from an external server that must be
                  integrated with our UI state. Server state is a simple
                  concept, but can be hard to manage alongside all of our local
                  and global UI state. There are several pieces of state that
                  must be managed every time you fetch or update data from an
                  external server, including loading and error state.
                  Fortunately there are tools such as SWR and React Query that
                  make managing server state much easier.
                </p>
              </div>

              <div class="space-y-3">
                <span class="inline-block p-3 text-blue-500 bg-blue-100 rounded-xl dark:text-white dark:bg-blue-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                    />
                  </svg>
                </span>

                <h1 class="text-2xl font-semibold text-gray-700 capitalize dark:text-white">
                  URL state
                </h1>

                <p class="text-gray-500 dark:text-gray-300">
                  Data that exists on our URLs, including the pathname and query
                  parameters. URL state is often missing as a category of state,
                  but it is an important one. In many cases, a lot of major
                  parts of our application rely upon accessing URL state. Try to
                  imagine building a blog without being able to fetch a post
                  based off of its slug or id that is located in the URL! There
                  are undoubtedly more pieces of state that we could identify,
                  but these are the major categories worth focusing on for most
                  applications you build.
                </p>
              </div>
            </div>

            <div class="hidden lg:flex lg:w-1/2 lg:justify-center">
              <img
                class="w-[28rem] h-[28rem] flex-shrink-0 object-cover xl:w-[34rem] xl:h-[34rem] rounded-full"
                src="https://miro.medium.com/max/1400/1*L6VRj89-jxhxDp6NDOmYrA.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <section class="bg-white dark:bg-gray-900">
        <div class="container px-6 py-10 mx-auto">
          <h1 class="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">
            How does prototypical inheritance <br /> work?
          </h1>

          <div class="mt-2">
            <span class="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
            <span class="inline-block w-3 h-1 ml-1 bg-blue-500 rounded-full"></span>
            <span class="inline-block w-1 h-1 ml-1 bg-blue-500 rounded-full"></span>
          </div>

          <div class="mt-8 xl:mt-12 lg:flex lg:items-center">
            <div class="grid w-full grid-cols-1 gap-8 lg:w-1/2 xl:gap-16 md:grid-cols-2">
              <div class="space-y-3">
                <span class="inline-block p-3 text-blue-500 bg-blue-100 rounded-xl dark:text-white dark:bg-blue-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </span>

                <h1 class="text-2xl font-semibold text-gray-700 capitalize dark:text-white">
                  [[Prototype]]
                </h1>

                <p class="text-gray-500 dark:text-gray-300">
                  In JavaScript, objects have a special hidden property
                  [[Prototype]] (as named in the specification), that is either
                  null or references another object. That object is called “a
                  prototype”:
                </p>
              </div>

              <div class="space-y-3">
                <span class="inline-block p-3 text-blue-500 bg-blue-100 rounded-xl dark:text-white dark:bg-blue-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
                    />
                  </svg>
                </span>

                <h1 class="text-2xl font-semibold text-gray-700 capitalize dark:text-white">
                  Writing doesn’t use prototype
                </h1>

                <p class="text-gray-500 dark:text-gray-300">
                  The prototype is only used for reading properties.
                  Write/delete operations work directly with the object.Accessor
                  properties are an exception, as assignment is handled by a
                  setter function. So writing to such a property is actually the
                  same as calling a function.
                </p>
              </div>

              <div class="space-y-3">
                <span class="inline-block p-3 text-blue-500 bg-blue-100 rounded-xl dark:text-white dark:bg-blue-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
                    />
                  </svg>
                </span>

                <h1 class="text-2xl font-semibold text-gray-700 capitalize dark:text-white">
                  The value of “this”
                </h1>

                <p class="text-gray-500 dark:text-gray-300">
                  An interesting question may arise in the example above: what’s
                  the value of this inside set fullName(value)? Where are the
                  properties this.name and this.surname written: into user or
                  admin? The answer is simple: this is not affected by
                  prototypes at all. No matter where the method is found: in an
                  object or its prototype. In a method call, this is always the
                  object before the dot. So, the setter call admin.
                </p>
              </div>

              <div class="space-y-3">
                <span class="inline-block p-3 text-blue-500 bg-blue-100 rounded-xl dark:text-white dark:bg-blue-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                    />
                  </svg>
                </span>

                <h1 class="text-2xl font-semibold text-gray-700 capitalize dark:text-white">
                  for…in loop
                </h1>

                <p class="text-gray-500 dark:text-gray-300">
                  If that’s not what we want, and we’d like to exclude inherited
                  properties, there’s a built-in method obj.hasOwnProperty(key):
                  it returns true if obj has its own (not inherited) property
                  named key. So we can filter out inherited properties (or do
                  something else with them):
                </p>
              </div>
            </div>

            <div class="hidden lg:flex lg:w-1/2 lg:justify-center">
              <img
                class="w-[28rem] h-[28rem] flex-shrink-0 object-cover xl:w-[34rem] xl:h-[34rem] rounded-full"
                src="https://www.cronj.com/blog/wp-content/uploads/inheritance.png.webp"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      {/* Third part */}
      <section class="bg-white dark:bg-gray-900">
        <div class="container px-6 py-10 mx-auto">
          <h1 class="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">
            What is a unit test? <br />
            Why should we write unit tests?
          </h1>

          <div class="mt-2">
            <span class="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
            <span class="inline-block w-3 h-1 ml-1 bg-blue-500 rounded-full"></span>
            <span class="inline-block w-1 h-1 ml-1 bg-blue-500 rounded-full"></span>
          </div>

          <div class="mt-8 xl:mt-12 lg:flex lg:items-center">
            <div class="grid w-full grid-cols-1 gap-8 lg:w-1/2 xl:gap-16 md:grid-cols-2">
              <div class="space-y-3">
                <span class="inline-block p-3 text-blue-500 bg-blue-100 rounded-xl dark:text-white dark:bg-blue-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </span>

                <h1 class="text-2xl font-semibold text-gray-700 capitalize dark:text-white">
                  What Is Unit Testing?
                </h1>

                <p class="text-gray-500 dark:text-gray-300">
                  A unit test is a way of testing a unit - the smallest piece of
                  code that can be logically isolated in a system. In most
                  programming languages, that is a function, a subroutine, a
                  method or property. The isolated part of the definition is
                  important. In his book "Working Effectively with Legacy Code",
                  author Michael Feathers states that such tests are not unit
                  tests when they rely on external systems: “If it talks to the
                  database, it talks across the network, it touches the file
                  system, it requires system configuration, or it can't be run
                  at the same time as any other test."
                </p>
              </div>

              <div class="space-y-3">
                <span class="inline-block p-3 text-blue-500 bg-blue-100 rounded-xl dark:text-white dark:bg-blue-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
                    />
                  </svg>
                </span>

                <h1 class="text-2xl font-semibold text-gray-700 capitalize dark:text-white">
                  What Do Unit Tests Look Like?{" "}
                </h1>

                <p class="text-gray-500 dark:text-gray-300">
                  A unit can be almost anything you want it to be -- a line of
                  code, a method, or a class. Generally though, smaller is
                  better. Smaller tests give you a much more granular view of
                  how your code is performing. There is also the practical
                  aspect that when you test very small units, your tests can be
                  run fast; like a thousand tests in a second fast.
                </p>
              </div>

              <div class="space-y-3">
                <span class="inline-block p-3 text-blue-500 bg-blue-100 rounded-xl dark:text-white dark:bg-blue-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
                    />
                  </svg>
                </span>

                <h1 class="text-2xl font-semibold text-gray-700 capitalize dark:text-white">
                  Who Should Create The Unit Test Then?{" "}
                </h1>

                <p class="text-gray-500 dark:text-gray-300">
                  Robert V. Head says "Frequently, unit testing is considered
                  part of the programming phase, with the person that wrote the
                  program...unit testing". That isn't because programmers hold
                  the secret sauce to unit testing, it's because it makes sense.
                  The programmer that wrote the prod code will likely know how
                  to access the parts that can be tested easily and how to mock
                  objects that can't be accessed otherwise. It's a time trade
                  off.
                </p>
              </div>

              <div class="space-y-3">
                <span class="inline-block p-3 text-blue-500 bg-blue-100 rounded-xl dark:text-white dark:bg-blue-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                    />
                  </svg>
                </span>

                <h1 class="text-2xl font-semibold text-gray-700 capitalize dark:text-white">
                  What Can I Do With Them?
                </h1>

                <p class="text-gray-500 dark:text-gray-300">
                  Test Driven Development,Checking Your Work,Code
                  Documentation,Danger Zone,Common Problems:
                </p>
              </div>
            </div>

            <div class="hidden lg:flex lg:w-1/2 lg:justify-center">
              <img
                class="w-[28rem] h-[28rem] flex-shrink-0 object-cover xl:w-[34rem] xl:h-[34rem] rounded-full"
                src="https://www.guru99.com/images/unit-testing.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      {/* Fourth Part */}

      <section class="bg-white dark:bg-gray-900">
        <div class="container px-6 py-10 mx-auto">
          <h1 class="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">
            Angular vs React vs Vue:
            <br />
            Which Framework to Choose
          </h1>

          <div class="mt-2">
            <span class="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
            <span class="inline-block w-3 h-1 ml-1 bg-blue-500 rounded-full"></span>
            <span class="inline-block w-1 h-1 ml-1 bg-blue-500 rounded-full"></span>
          </div>

          <div class="mt-8 xl:mt-12 lg:flex lg:items-center">
            <div class="grid w-full grid-cols-1 gap-8 lg:w-1/2 xl:gap-16 md:grid-cols-2">
              <div class="space-y-3">
                <span class="inline-block p-3 text-blue-500 bg-blue-100 rounded-xl dark:text-white dark:bg-blue-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </span>

                <h1 class="text-2xl font-semibold text-gray-700 capitalize dark:text-white">
                  Angular:
                </h1>

                <p class="text-gray-500 dark:text-gray-300">
                  Angular has a steep learning curve, considering it is a
                  complete solution, and mastering Angular requires you to learn
                  associated concepts like TypeScript and MVC. Even though it
                  takes time to learn Angular, the investment pays dividends in
                  terms of understanding how the front end works.
                </p>
              </div>

              <div class="space-y-3">
                <span class="inline-block p-3 text-blue-500 bg-blue-100 rounded-xl dark:text-white dark:bg-blue-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
                    />
                  </svg>
                </span>

                <h1 class="text-2xl font-semibold text-gray-700 capitalize dark:text-white">
                  React:
                </h1>

                <p class="text-gray-500 dark:text-gray-300">
                  React offers a Getting Started guide that should help one set
                  up React in about an hour. The documentation is thorough and
                  complete, with solutions to common issues already present on
                  Stack Overflow. React is not a complete framework and advanced
                  features require the use of third-party libraries. This makes
                  the learning curve of the core framework not so steep but
                  depends on the path you take with additional functionality.
                  However, learning to use React does not necessarily mean that
                  you are using the best practices.
                </p>
              </div>

              <div class="space-y-3">
                <span class="inline-block p-3 text-blue-500 bg-blue-100 rounded-xl dark:text-white dark:bg-blue-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
                    />
                  </svg>
                </span>

                <h1 class="text-2xl font-semibold text-gray-700 capitalize dark:text-white">
                  Vue:{" "}
                </h1>

                <p class="text-gray-500 dark:text-gray-300">
                  Vue provides higher customizability and hence is easier to
                  learn than Angular or React. Further, Vue has an overlap with
                  Angular and React with respect to their functionality like the
                  use of components. Hence, the transition to Vue from either of
                  the two is an easy option. However, simplicity and flexibility
                  of Vue is a double-edged sword — it allows poor code, making
                  it difficult to debug and test.
                </p>
              </div>

              <div class="space-y-3">
                <span class="inline-block p-3 text-blue-500 bg-blue-100 rounded-xl dark:text-white dark:bg-blue-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                    />
                  </svg>
                </span>

                <h1 class="text-2xl font-semibold text-gray-700 capitalize dark:text-white">
                  Ready-to-use libraries{" "}
                </h1>

                <p class="text-gray-500 dark:text-gray-300">
                  One of the useful and powerful things about using any of these
                  three library options is taking advantage of the many
                  component libraries and frameworks available. Based on history
                  and popularity, naturally there are more React component
                  libraries vs. libraries for Vue. And since Angular is a much
                  more complete set of tools, it’s possible you may not need an
                  Angular library as often as one for React or Vue. With that in
                  mind, below are a few options you can consider. This is just a
                  small sampling to give you an idea of what these three
                  libraries are capable of.
                </p>
              </div>
            </div>

            <div class="hidden lg:flex lg:w-1/2 lg:justify-center">
              <img
                class="w-[28rem] h-[28rem] flex-shrink-0 object-cover xl:w-[34rem] xl:h-[34rem] rounded-full"
                src="https://plainenglish.io/assets/post-content/angular-vs-react-vs-vue-js-which-is-the-best-choice-for-2022.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
