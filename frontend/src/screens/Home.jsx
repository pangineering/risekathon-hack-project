import React, {useEffect} from "react";
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { ListGroup } from "react-bootstrap";
import Spinner from '../components/Spinner'
import { getProjects, reset } from '../features/projects/projectSlice';
import {getAllUsers, reset_user} from '../features/users/userSlice'

function Home() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth)
  const { projects, isLoading, isError, message } = useSelector(
    (state) => state.projects
  )
  const { users, uisLoading, uisError, umessage } = useSelector(
    (state) => state.users
  )

console.log('projects: ' + projects)
  useEffect(() => {
   if (isError || uisError){
     console.log(message)
     }

    if (!user) {
      navigate('/login')
    }


  dispatch(getProjects())
dispatch(getAllUsers())
  return () => {
    dispatch(reset())
    dispatch(reset_user())

   }
  }, [user, navigate, isError, message, dispatch])

  if (isLoading) {
    return <Spinner />
  }


  return (
    <>
      <h1>Project List</h1>
      <ListGroup>
        {projects && projects.map((v,i) => (
          <ListGroup.Item key={i}>{v.projectName}</ListGroup.Item>
        ))}
      </ListGroup>

    </>
  );
}

export default Home;