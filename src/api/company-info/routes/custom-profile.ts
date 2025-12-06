export default { 
    routes: [
        {
            method: "GET",
            path: "/company/profile",
            handler: "company-info.profile",
            config: {
                auth: false // set to public endpoint
            }
        }
    ]
}