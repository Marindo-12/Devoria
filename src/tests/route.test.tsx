import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';
import { projects } from '../utils/data/ProjectsData/projects';
import { developers } from '../utils/data/developerData/developers';
import { describe, expect, test } from 'vitest';

describe('Routage: pages principales', () => {
  test('Home affiche "Get Started with Devoria"', async () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
    expect(await screen.findByText(/Get Started with Devoria/i)).toBeInTheDocument();
  });

  test('Developers affiche "Browse Developers"', async () => {
    render(
      <MemoryRouter initialEntries={['/developers']}>
        <App />
      </MemoryRouter>
    );
    expect(await screen.findByText(/Filter by Category/i)).toBeInTheDocument();
  });

  test('Developer profile affiche le nom du développeur', async () => {
    const devId = developers[0].id; 
    render(
      <MemoryRouter initialEntries={[`/developer/${devId}`]}>
        <App />
      </MemoryRouter>
    );
    expect(await screen.findByText(developers[0].personal.name)).toBeInTheDocument();
  });

  test('Projects affiche "Browse Projects"', async () => {
    render(
      <MemoryRouter initialEntries={['/projects']}>
        <App />
      </MemoryRouter>
    );
    expect(await screen.findByText(/Browse Projects/i)).toBeInTheDocument();
  });

  test('Request Service affiche "Describe Your Project"', async () => {
    const devId = developers[0].id;
    render(
      <MemoryRouter initialEntries={[`/developer/${devId}/describe-project`]}>
        <App />
      </MemoryRouter>
    );
    expect(await screen.findByText(/Describe Your Project/i)).toBeInTheDocument();
  });

  test('Project detail affiche le titre du projet', async () => {
    const projId = projects[0].id;
    render(
      <MemoryRouter initialEntries={[`/project/${projId}`]}>
        <App />
      </MemoryRouter>
    );
    expect(await screen.findByText(projects[0].title)).toBeInTheDocument();
  });

  test('SendMessage affiche l\'input de message', async () => {
    const devId = developers[0].id;
    render(
      <MemoryRouter initialEntries={[`/developer/${devId}/send-message`]}>
        <App />
      </MemoryRouter>
    );
    expect(await screen.findByPlaceholderText(/Type a message\.\.\./i)).toBeInTheDocument();
  });

  test('Communities affiche "Communautés"', async () => {
    render(
      <MemoryRouter initialEntries={['/communities']}>
        <App />
      </MemoryRouter>
    );
    expect(await screen.findByText(/Join specialized groups and connect with developers/)).toBeInTheDocument();
  });
});