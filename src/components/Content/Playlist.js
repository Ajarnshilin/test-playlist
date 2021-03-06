import React, { useEffect } from "react";
import styled from "styled-components";
import RemoveSong from "../Button/RemoveSong";
import songJson from "../../song.json"
import { ListContextV2 } from '../../context/ListContextV2'
import { Link } from 'react-router-dom'

const SongContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  /* margin-top: 0.5rem; */
  border-bottom: 1px solid grey;
  flex: 0.5;
  display: flex;
  `
const AddedSongTitle = styled.div`
  flex: 1;
  display: flex;
  margin: 1rem;
  color: grey;
`
const AddedSongArtist = styled.div`
  flex: 1;
  display: flex;
  margin: 1rem;
  color: grey;
`
const AddedSongDuration = styled.div`
  flex: 1.3;
  display: flex;
  margin: 1rem;
  color: grey;
`
const SongTitle = styled.div`
  flex: 1;
  display: flex;
  margin: 1rem;
`
const SongArtist = styled.div`
  flex: 1;
  display: flex;
  margin: 1rem;
`
const SongDuration = styled.div`
  flex: 1;
  display: flex;
  margin: 1rem;
`
const Remove = styled.button`
  height: 2.5rem;
  width: 5rem;
  background-color: transparent;
  color: #fff;
  border: 1px solid #fff;
  font-size: 1rem;
  outline: none;
  border-radius: 45px;
  cursor: pointer;
  &:hover {
    background-color: #bd8584;
  }
`;
function Playlist() {
  const { doge } = React.useContext(ListContextV2)
  const { idSong, setIdSong, dogwow, setDogwow } = doge

    return (
        <>
        <SongContainer>
              <AddedSongTitle>Title</AddedSongTitle>
              <AddedSongArtist>Name</AddedSongArtist>
              <AddedSongDuration>Duration</AddedSongDuration>
        </SongContainer>
        {songJson.filter((item, index) => {
          if(idSong === null){
            return false
          }
          return item.id === idSong.find(element => element === item.id)
        }
        ).map((item, key) => (
            <RemoveSong value={key} item={item}/>
        ))}
        </>
    )
}

export default Playlist;