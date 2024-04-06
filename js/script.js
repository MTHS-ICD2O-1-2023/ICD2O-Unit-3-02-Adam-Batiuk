// Copyright (c) 2024 Mr. Adam Batiuk All rights reserved
//
// Created by: Adam Batiuk
// Created on: Mar 2024
// This file contains the JS functions for index.html
"use strict"


function myButtonClicked() {
  const length = parseFloat(document.getElementById("length").value)
  const width = parseFloat(document.getElementById("width").value)
  const height = parseFloat(document.getElementById("height").value)

  const volume = (length * width * height) / 3
  const volumeRound = Math.round(volume * 100) / 100

  document.getElementById("answer").innerHTML = "Volume is: " + volumeRound + " mm³"
}