export const Paths = {
  home_page: "/",
  user_account_page: "/user-account",
  providers_page: "/providers",
};


class ContactInformation{
  constructor(){
    this.email = "servisu.assistance@gmail.com";
    this.number = "+27678679119";
    this.website = "https://chrismajuba.github.io/servisu-website/";
    this.address = "Protea Glen Extension 11, Soweto, 1819";
    this.privacyLastUpdate = new Date(2025, 9, 10).toLocaleDateString();
  } 
}
const contactInformation = new ContactInformation();
export default contactInformation;