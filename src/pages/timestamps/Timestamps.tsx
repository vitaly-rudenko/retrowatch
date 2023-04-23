import { useState } from 'react'
import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid'
import { Button } from '@mui/material'
import { TIMESTAMP_TYPES, Timestamp } from '../../types/overwatch'

const columns: GridColDef[] = [
  { field: 'timestamp', headerName: 'Timestamp', width: 150, editable: true },
  { field: 'type', headerName: 'Type', width: 150, editable: true, type: 'singleSelect', valueOptions: TIMESTAMP_TYPES },
]

export const Timestamps = () => {
  const [timestamps, setTimestamps] = useState<Timestamp[]>([])

  const handleType = (type: Timestamp['type']) => {
    setTimestamps([...timestamps, { id: '...', date: new Date(), type, recordId: undefined }])
  }

  const rows: GridRowsProp = [...timestamps].sort((a, b) => a.date.getTime() - b.date.getTime())
    .map((timestamp, i, timestamps) => ({
      ...timestamp,
      id: String(i),
      timestamp: `${Math.floor((timestamp.date.getTime() - timestamps[0].date.getTime()) / 1000)}s`,
    }))

  return <>
    <DataGrid rows={rows} columns={columns} editMode='row' />
    {TIMESTAMP_TYPES.map(type => <Button onClick={() => handleType(type)}>{type}</Button>)}
  </>
}
