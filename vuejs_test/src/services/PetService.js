import axios from "axios";
const url = "http://api-pets.fituapp.com/api/v1/pets";
const params = {
	token: "e2990f099f38288eb9d8d20762188b84",
};
class PetService{
  retrieveAllPets(){
    return axios.get(`${url}`,{params});
  }
}

export default new PetService();
