import React, { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../redux/actions/actions'

export default function Details() {

  const dispatch = useDispatch();
  const character = useSelector((state) => state.characterDetail);

  useEffect(() => { dispatch(actions.getCharacterDetail());}, []);

  return (
    <>
      <h3>{character.name}</h3>
      <img src={character.image} alt={character.name} />
      <p>{character.role}</p>
      <p>{character.education}</p>
      <p>{character.skills}</p>
      <p>{character.projects}</p>
    </>
  )
}
