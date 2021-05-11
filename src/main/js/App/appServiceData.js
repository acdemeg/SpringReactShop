import axios from 'axios';

class AppServiceData {
  async getResourse(url) {
    const res = await axios.get(url)
      .catch(err => `${err}`);
    return res.data;
  }

  async getProducts() {
    return await this.getResourse(`/api/products`);
  }

  async getProductById(id) {
    return await this.getResourse(`/api/products/${id}`);
  }

  async getUsers() {
    return await this.getResourse(`/api/users`);
  }

  async getOrdersAll() {
    return await this.getResourse(`/api/orders`);
  }


  async getOrdersOfUser(id) {
    if(!id)
      return [];

    return await this.getResourse(`/api/users/${id}/orders`);
  }

  async getProfileOfUser(id) {
    if(!id)
      return {};
    return await this.getResourse(`/api/users/${id}`);
  }

  async updateProfileById(id, data) {
    if (!id) return {};
    const res = await axios.put(`/api/users/${id}`, data);
    return res.data;
  }

  async createOrder(order) {
    const res = await axios.post(`/api/orders`, order)
      .catch(err => `${err}`);
    return res.data === 'success';
  }

  async updateOrder(id, newStatus) {
    const res = await axios.patch(`/api/orders/${id}`, { status: newStatus })
      .catch(err => `${err}`);
    return res.data === 'success';
  }

  async updateProduct(id, product) {
    const res = await axios.put(`/api/products/${id}`, product)
      .catch(err => `${err}`);
      
      if(res === "Error: Request failed with status code 500"
      || res === "Error: Request failed with status code 413"){
        return false;
      }
      return res;
  }

  async addProduct(product) {
    const res = await axios.post(`/api/products`, product)
      .catch(err => `${err}`);
    return res.data === 'success add product';
  }

  async deletProduct(id) {
    return await axios.delete(`/api/products/${id}`);
  }

  async regUser(user) {
    const res = await axios.post(`/api/users/register`, user)
      .catch(err => `${err}`);
    return res.data === 'success registration';
  }

  async logInUser(user) {
    const res = await axios.post(`/api/users/login`, user).catch(err => {
      return `${err}`;
    });
    return res.data === 'wrong email or password' ? false : res.data;
  }

}

const appServiceData = new AppServiceData();

export default appServiceData;
