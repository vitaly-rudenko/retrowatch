import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid'
import { Button } from '@mui/material'
import { TIMESTAMP_TYPES, Timestamp } from '../../types/overwatch'

import './Timestamps.css'
import { usePermanentState } from '../../hooks/usePermanentState'

const columns: GridColDef[] = [
  { field: 'timestamp', headerName: 'Timestamp', width: 150, editable: true },
  { field: 'type', headerName: 'Type', width: 150, editable: true, type: 'singleSelect', valueOptions: TIMESTAMP_TYPES },
]

function formatTime(ms: number) {
  const minutes = Math.floor(ms / 60_000)
  const seconds = Math.floor((ms % 60_000) / 1000)

  return `${minutes}:${String(seconds).padStart(2, '0')}`
}

export const Timestamps = () => {
  const [timestampsReady, timestamps, setTimestamps] = usePermanentState<Timestamp[]>('timestamps', [])

  const handleType = (type: Timestamp['type']) => {
    setTimestamps([...timestamps, { id: '...', createdAt: Date.now(), type, recordId: undefined }])
  }

  const handleReset = () => {
    setTimestamps([])
  }

  const rows: GridRowsProp = [...timestamps].sort((a, b) => a.createdAt - b.createdAt)
    .map((timestamp, i, timestamps) => ({
      ...timestamp,
      id: String(i),
      timestamp: formatTime(timestamp.createdAt - timestamps[0].createdAt),
    }))
  
  return <div className='page'>
    {timestampsReady && <div className='container'>
      {timestamps.length > 0 && <DataGrid rows={rows} columns={columns} editMode='row' hideFooter density='compact' />}

      <div className='buttons'>
        {TIMESTAMP_TYPES.map(type => {
          if ((timestamps.length === 0) === (type !== 'start')) {
            return null
          }

          return <Button key={type} variant='contained' onClick={() => handleType(type)}>{type}</Button>
        })}
      </div>

      {timestamps.length > 0 && <div className='buttons'>
        <Button variant='outlined' onClick={handleReset}>reset</Button>
      </div>}
    </div>}
  </div>
}
