**MB Manage Pvt. Ltd.**

`An Online portal for colleges`

**Tech Stack**
* Spring boot 2.1.0
* Angular 7.0.2

**Steps to run** 

1. Go to `mb-manage-service` and fire **mvn spring-boot:run**
2. Go to `mb-manage-ui` and run **npm install** and then fire **ng serve** on the same path
3. Populate Data by hitting endpoint
`http://localhost:8080/mb-manage-service/api/v1/commons/populate`
4. Go to `http://localhost:4200`
5. Below are user details

**Tenant 1**

Shri Guru Gobind Singhji Institute of Engineering and Technology	

**User 1**

`UserName("dsonawane");`

`Password("sonawane@123");`

`Roles(clerk, senior);`

**User 2**

`UserName("spagar");`

`Password("pagar@123");`

`Roles(clerk);`

**Tenant 2**

Pune Institute of Computer Technology	

**User 1**

`UserName("stambe");`

`Password("tambe@123");`

Roles(clerk, senior);

**User 2**

`UserName("npawar");`

`Password("nitin@123");`

`Roles(clerk);`


**To see client side documentation**
1. Go to `mb-manage-ui/documentation` and fire **http-server** (you need to first run `npm install -g http-server`)


**To see server side documentation**
1. Go to `http://localhost:8080/mb-manage-service/swagger-ui.html`

