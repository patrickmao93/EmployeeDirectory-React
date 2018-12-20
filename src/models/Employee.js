/**
 * Class representing an employee
 */
export class Employee {
  /**
   * Creates an employee
   * @param {object} data - data from response of ajax call to the RandomAPI
   */
  constructor(data) {
    this.uuid = data.login.uuid;
    this.info = {
      firstName: this.capitalize(data.name.first),
      lastName: this.capitalize(data.name.last),
      email: data.email,
      phone: data.phone,
      picURL: data.picture.large,
      city: this.capitalize(data.location.city),
      address: `${this.capitalizeEach(data.location.street)}, ${this.capitalize(
        data.location.state
      )} ${data.location.postcode}`,
      birthday: this.formatDate(data.dob.date)
    };
  }

  /**
   * Formats standard date string to MM/DD/YY format
   * @param {date} dateStr - date string in standard format
   */
  formatDate(dateStr) {
    const d = new Date(dateStr);
    const config = {
      month: "2-digit",
      day: "2-digit",
      year: "2-digit"
    };
    return d.toLocaleDateString("en-US", config);
  }

  /**
   * Capitalizes the first letter of a given string
   * @param {string} str
   */
  capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  /**
   * Capitalizes the first letters in every word that is separated by space
   * @param {string} str
   */
  capitalizeEach(str) {
    return str
      .split(" ")
      .map(word => this.capitalize(word))
      .join(" ");
  }
}
