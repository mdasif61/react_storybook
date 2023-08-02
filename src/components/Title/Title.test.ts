import { render, screen } from '@testing-library/react';
import Title from './Title';
test('fdf',()=>{
  render(<Title/>);
  const titleTextEl=screen.getByText(/this is title/i);
  expect(titleTextEl).toBeInTheDocument()
})