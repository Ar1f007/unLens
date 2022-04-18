export const Blog = () => {
  return (
    <section className="p-4 lg:p-16 max-w-7xl mx-auto bg-neutral mt-24 rounded">
      <div
        tabIndex="0"
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box text-gray-400"
      >
        <div className="collapse-title lg:text-xl font-medium">
          What is the Difference between authentication and authorization?
          <div className="divider"></div>
        </div>

        <div className="collapse-content">
          <p>
            <b>Authentication</b> : It is the process of identifying a user and verifying that they
            are who they say they are. It works through password, one-time pins etc.
            <br /> Login is an example of authentication process.
            <br /> <br />
            <b>Authorization</b> : When a user is successfully authenticated then the system may
            permits access to some routes/pages and may deny access to some. This process is known
            as authorization.
            <br /> For example, in this website, 'checkout' route is only accessible to the logged
            in user. Means, when user clicks on 'Book' button (in the service section) only the
            verified user can access that route.
          </p>
        </div>
      </div>
      <div
        tabIndex="0"
        className="mt-10 collapse collapse-arrow border border-base-300 bg-base-100 rounded-box text-gray-400"
      >
        <div className="collapse-title lg:text-xl font-medium">
          Why are you using firebase? What other options do you have to implement authentication?
          <div className="divider"></div>
        </div>

        <div className="collapse-content ">
          <p>
            <em>Reason behind I'm using firebase is</em> that it takes almost zero effort to get
            authentication done. It supports authentication using passwords, phone numbers, popular
            identity providers such as Google, Facebook and Twitter, and more. But that is not only
            benefit of firebase, it comes with lot of other services which makes the development
            process a breeze.
            <br />
            <br />
            However, there are some other alternative options also available on market. For example:
            Auth0, Okta, Json web token, Passport etc.
          </p>
        </div>
      </div>
      <div
        tabIndex="0"
        className="mt-10 collapse collapse-arrow border border-base-300 bg-base-100 rounded-box text-gray-400"
      >
        <div className="collapse-title lg:text-xl font-medium">
          What other services does firebase provide other than authentication?
          <div className="divider"></div>
        </div>

        <div className="collapse-content">
          <p>
            Firebase provides lots of services other than just authentication. Since it is a Backend
            as a service(BaaS), it includes realtime database, storage for storing data. It also
            support hosting, cloud messaging.
            <br /> It also provides Google analytics which gives a very in depth record of the user
            activity, helping user grow their business faster.
          </p>
        </div>
      </div>
    </section>
  );
};
