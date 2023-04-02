function run() {
  new Vue({
    el: "#app",
    data: {
      users: [],
      usersService: null,
    },
    created: async function () {
      this.usersService = users();
      await this.getUsers();
    },
    methods: {

      async getUsers() {
        try {
          const response = await this.usersService.get();
          this.users = response.data;
        } catch (error) {
          console.error(error);
        }
      },

      async deleteUser(name) {
        try {
          await this.usersService.bla(name);
          this.users = this.users.filter((user) => user.name !== name);
          await this.getUsers();

        } catch (error) {
          console.error(error);
        }
      },

      async addUser() {
        try {
          await this.usersService.post(document.getElementById('form-name').value, document.getElementById('form-city').value);
          // this.users.push(user);
          await this.getUsers();

        } catch (error) {
          console.error(error);
        }
      },

      async updateUser(index) {
        try {
          await this.usersService.put(index, document.getElementById('formUp-name').value, document.getElementById('formUp-city').value);
          await this.getUsers();
        } catch (error) {
          console.error(error);
        }
      },
    }
  }
  );
}



document.addEventListener("DOMContentLoaded", () => {
  run();
});
