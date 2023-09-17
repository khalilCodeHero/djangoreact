import axios from "axios";


export function getUserlogin(){
    return axios.get('http://127.0.0.1:8000/Userlogin/')
    .then(res => {
      return  res.data
    })
}
export function getAdminlogin(){
  return axios.get('http://127.0.0.1:8000/Hauptuser/')
  .then(res => {
    return  res.data
  })
}
export function getArticle(){
  return axios.get('http://127.0.0.1:8000/Article/')
  .then(res => {
    return  res.data
  })
}
export function getAvis(){
  return axios.get('http://127.0.0.1:8000/Avis/')
  .then(res => {
    return  res.data
  })
}
export async function addAvis(avis){
  const res = await axios.post('http://127.0.0.1:8000/Avis/', {
    avis_id: null,
    avis_name: avis.avis_name,
    avis_post: avis.avis_post,
    avis_eval: avis.avis_eval,
    avis_content:avis.avis_content,
    
  });
  return res.data;
}
export async function addUserlogin(user){
  const res = await axios.post('http://127.0.0.1:8000/Userlogin/', {
    user_id: null,
    user_email: user.user_email,
    user_password: user.user_password,
    
  });
  return res.data;
}
export async function addEntrelogin(entre){
  const res = await axios.post('http://127.0.0.1:8000/Entrelogin/', {
    entre_id: null,
    entre_name: entre.entre_name,

    entre_email: entre.entre_email,
    entre_password: entre.entre_password,
    
  });
  return res.data;
}

export function getEntrelogin(){
  return axios.get('http://127.0.0.1:8000/Entrelogin/')
  .then(res => {
    return  res.data
  })
}
export function getCandidat(){
  return axios.get('http://127.0.0.1:8000/Candidat/')
  .then(res => {
    return  res.data
  })
}
export function getOffre(){
  return axios.get('http://127.0.0.1:8000/Offre/')
  .then(res => {
    return  res.data
  })
}
export function deleteOffre(id){
  return axios.delete('http://127.0.0.1:8000/Offre/'+id+'/')
  .then(res => {
    return  res.data
  })
}
export function deleteHuser(id){
  return axios.delete('http://127.0.0.1:8000/Hauptuser/'+id+'/')
  .then(res => {
    return  res.data
  })
}
export function deleteuser(id){
  return axios.delete('http://127.0.0.1:8000/Userlogin/'+id+'/')
  .then(res => {
    return  res.data
  })
}
export function deleteentre(id){
  return axios.delete('http://127.0.0.1:8000/Entrelogin/'+id+'/')
  .then(res => {
    return  res.data
  })
}
export async function addOffre(offre){
  const res = await axios.post('http://127.0.0.1:8000/Offre/', {
    offre_id: null,
    offre_soc: offre.offre_soc,
    offre_post: offre.offre_post,
    offre_date: offre.offre_date,
    offre_description: offre.offre_description,
  });
  return res.data;
}
export async function addMessage(message){
  const res = await axios.post('http://127.0.0.1:8000/Message/', {
    message_id: null,
    message_name: message.message_name,
    message_email: message.message_email,
    message_subject: message.message_subject,
    message_mess: message.message_mess,
  });
  return res.data;
}

export async function editOffre(offre,id){
  const res = await axios.put('http://127.0.0.1:8000/Offre/'+id+'/', {
    offre_soc: offre.offre_soc,
    offre_post: offre.offre_post,
    offre_date: offre.offre_date,
    offre_description: offre.offre_description,
  });
  return res.data;
}
export function getCandidatures(){
  return axios.get('http://127.0.0.1:8000/Candidatures/')
  .then(res => {
    return  res.data
  })
}
export async function addCandidatures(can){
  const res = await axios.post('http://127.0.0.1:8000/Candidatures/', {
    candid_id: null,
    candid_soc: can.candid_soc,
    candid_post: can.candid_post,
    candid_date: can.candid_date,
    candid_canname: can.candid_canname,
    candid_canemail: can.candid_canemail,
    candid_canadresse: can.candid_canadresse,
    candid_canexper: can.candid_canexper,
    candid_canbacplus: can.candid_canbacplus,
    candid_canmotiv: can.candid_canmotiv,
  });
  return res.data;
}