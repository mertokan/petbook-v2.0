'use client'
import {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {toggleTheme} from '@/lib/redux/slicers/themeSlice'

const LoadTheme = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light'
    dispatch(toggleTheme(savedTheme))
  }, [dispatch])

  return null
}

export default LoadTheme
