export const config = {
  domainSource: "https://6738af62-2b3e-4202-8a3d-3c5a9b2fba3e-staging.weweb-preview.io/", // Your WeWeb app preview link
  patterns: [
      {
          pattern: "/?post=+",
          metaDataEndpoint: "https://xsrr-l2ye-dpbj.f2.xano.io/api:Coq7oZJp:staging/posts/get_single/{post_id}"
      },
      {
          pattern: "/team/profile/[^/]+",
          metaDataEndpoint: "https://xeo6-2sgh-ehgj.n7.xano.io/api:LjwxezTv/team/profile/{profile_id}/meta"
      }
      // Add more patterns and their metadata endpoints as needed
  ]
};
