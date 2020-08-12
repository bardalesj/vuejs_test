import axios from "axios";
const url = "http://api-pets.fituapp.com/api/v1/pets";
const token = "e2990f099f38288eb9d8d20762188b84";
const params = {
	token: "e2990f099f38288eb9d8d20762188b84",
};
class PetService{
  retrieveAllPets(){
    return axios.get(`${url}`,{params});
  }
	retrievePet(id) {
    return axios.get(`${url}/${id}`,{params});
}
	updatePet(id, pet) {
      return axios.put(`${url}/${id}`, pet,{params});
  }
	deletePet(id){
		return axios.delete(`${url}/${id}?token=${token}`);
	}
}

export default new PetService();
