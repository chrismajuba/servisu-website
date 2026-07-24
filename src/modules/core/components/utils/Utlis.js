export const Paths = {
  home_page: "/",
  user_account_page: "/user-account",
  providers_page: "/providers",
};

class ContactInformation {
  constructor() {
    this.email = "support@servisu.co.za";
    this.adminEmail = "admin@servisu.co.za";
    this.number = "+27678679119";
    this.address = "Protea Glen Extension 11, Soweto, 1819";
    this.companyName = "Servisu Technologies (Pty) Ltd";
    this.companyRegistration = "2026/503669/07";
    this.informationOfficer = "Information Officer";
    this.privacyLastUpdate = "July 2026";
    this.termsLastUpdate = "July 2026";
  }
}
const contactInformation = new ContactInformation();
export default contactInformation;
