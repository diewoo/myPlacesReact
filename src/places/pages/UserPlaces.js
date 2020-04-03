import React from 'react'
import PlaceList from '../components/PlaceList'
import { useParams } from 'react-router-dom'

const DUMMY_PLACES =
[
  {
    id: 'p1',
    title: 'Machu Picchu',
    description: 'One of the most place in Peru',
    imageUrl: 'https://www.machupicchu.biz/sites/default/files/machupicchu_0.jpg',
    address: '20 W 34th ST, Machu Picchu , NY 1001',
    location: {
      lat: -12.0939824,
      lng: -76.9843986
    },
    creatorId: 'u1'
  },
  {
    id: 'p2',
    title: 'Empire State Buiding',
    description: 'One of the most famous sky scrapers in the world',
    imageUrl: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/06/74/aa/fc.jpg',
    address: '20 W 34th ST, New York , NY 1001',
    location: {
      lat: -12.0939824,
      lng: -76.9843986
    },
    creatorId: 'u2'
  }
]
const UserPlaces = () => {
  const userId = useParams().userId
  const loadedPlaces = DUMMY_PLACES.filter(place => place.creatorId === userId)
  return (
    <PlaceList items={loadedPlaces} />
  )
}

export default UserPlaces
