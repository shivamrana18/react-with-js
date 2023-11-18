import React from 'react'

export default function Passport() {
  return (
      <>
    <div>Passport</div>
    <Route path='/regular'>
    <button>Regular</button>
    </Route>
    <Route path='/tatkal'>
    <button>Tatkal</button>
    </Route>
    </>
  )
}
