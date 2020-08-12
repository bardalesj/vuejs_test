import axios from "axios";
const url = "http://api-pets.fituapp.com/api/v1/pets";
const token = "e2990f099f38288eb9d8d20762188b84";
const params = {
	token: "e2990f099f38288eb9d8d20762188b84",
};
class PetService{
	//Metodo para obtener toda la informacion
  retrieveAllPets(){
    return axios.get(`${url}`,{params});
  }
	//Metodo para obtener toda la informacion por id
	retrievePet(id) {
    return axios.get(`${url}/${id}`,{params});
}
	//Metodo para agregar nueva informacion
	addPet(id, pet) {
			return axios.post(`${url}`,pet,{params});
	}
	//Metodo para modificar informacion
	updatePet(id, pet) {
      return axios.put(`${url}/${id}`,pet,{params});
  }
	//Metodo para eliminar informacion
	deletePet(id){
		return axios.delete(`${url}/${id}?token=${token}`);
	}
}

export default new PetService();
