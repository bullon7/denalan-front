import { configureStore } from '@reduxjs/toolkit'
import React from 'react'
import { uiSlice } from './uiSlice'

export const store = configureStore({
    reducer: {
        ui: uiSlice.reducer,
    }
})
