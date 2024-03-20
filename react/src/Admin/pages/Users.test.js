import React from 'react';
import { render, screen } from '@testing-library/react';
import Users from './Users';

describe('Users', () => {

    test('renders Users page', () => {
        render(<Users />);
        const pageTitle = screen.getByText(/Users List/i);
        expect(pageTitle).toBeInTheDocument();
    });

    test('renders search bar', () => {
        render(<Users />);
        const searchBar = screen.getByPlaceholderText(/Search.../i);
        expect(searchBar).toBeInTheDocument();
    });

    test('toggles search bar visibility', () => {
        render(<Users />);
        const toggleButton = screen.getByRole('button');
        expect(screen.queryByPlaceholderText(/Search.../i)).not.toBeInTheDocument();
        userEvent.click(toggleButton);
        expect(screen.getByPlaceholderText(/Search.../i)).toBeInTheDocument();
    });

    test('renders add user button', () => {
        render(<Users />);
        const addUserButton = screen.getByRole('link', { name: /Add user/i });
        expect(addUserButton).toBeInTheDocument();
        expect(addUserButton).toHaveAttribute('href', '/admin/add-user');
    });

});
