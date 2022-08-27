import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'
import BStotra from './BStotra'
import BottomNav from '../Components/BottomNav'




export default class Home extends Component {
  render() {
    return (
      <>
      <BStotra/>
      <BottomNav/>
      </>
    )
  }
}

const styles = StyleSheet.create({})