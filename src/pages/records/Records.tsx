import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid'
import { Record } from '../../types/overwatch'
import { maps } from '../../constants/overwatch'

const records: Record[] = [
  { id: '1', createdAt: Date.parse('2020-01-01 12:01'), outcome: 'win', map: 'ilios', heroes: ['junkrat', 'cassidy'], evaluation: 'hard', improvements: ['aim', 'positioning'], performance: 'acceptable', note: '' },
  { id: '2', createdAt: Date.parse('2020-01-01 12:00'), outcome: 'loss', map: 'junkertown', heroes: ['cassidy'], evaluation: 'medium', improvements: ['ult-management', 'game-sense'], performance: 'great', note: '' },
]

const rows: GridRowsProp = [...records].sort((a, b) => b.createdAt - a.createdAt)
  .map((record, i) => ({
    ...record,
    date: new Date(record.createdAt).toLocaleString(),
    outcome: record.outcome === 'win',
  }))

const columns: GridColDef[] = [
  { field: 'date', headerName: 'Date', width: 150, editable: true },
  { field: 'map', headerName: 'Map', width: 150, editable: true, type: 'singleSelect', valueOptions: maps.map(map => map.slug) },
  { field: 'heroes', headerName: 'Heroes', width: 150, editable: true },
  { field: 'outcome', headerName: 'Outcome', width: 150, editable: true, type: 'boolean' },
  { field: 'evaluation', headerName: 'Evaluation', width: 150, editable: true, type: 'singleSelect', valueOptions: ['easy', 'medium', 'hard'] },
  { field: 'performance', headerName: 'Performance', width: 150, editable: true, type: 'singleSelect', valueOptions: ['great', 'acceptable', 'bad', 'perfect'] },
  { field: 'improvements', headerName: 'Improvements', width: 150, editable: true },
  { field: 'note', headerName: 'Note', width: 150, editable: true },
]

export const Records = () => {
  return <>
    <DataGrid rows={rows} columns={columns} editMode='row' />
  </>
}
