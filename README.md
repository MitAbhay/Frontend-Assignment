# Logs and Metrics (TrueFoundry)

## Description

This project is a NexJS/React application developed as an assignment task for TrueFoundry. The goal is to create an application that allows users to fetch and view system logs and metrics. The application consists of two screens: Logs and Metrics, which can be toggled between using the Navbar. The SPA navigation is integrated.

## Problem Statement

The task involves creating a React application with the following features based on the provided Figma design:

- Logs screen with a terminal-like view for rendering logs.
- Metrics screen with four charts rendered using Charts.
- Both screens should support time-range based filtering, live logs, infinite scroll, and pagination.
- The application should have a Storybook for documenting all components.

## Libraries Used

- apexcharts: ^3.48.0,
- next: 14.2.2,
- react: ^18,
- react-apexcharts: ^1.4.1,
- react-dom: ^18,
- recharts: ^2.12.6

### Logs

1. Terminal-like view for rendering logs.
2. Quick selections for time-range (Last {n} minutes/hours).
3. Custom time range selection with a date and time range picker.
4. Subscription to live logs with continuous population at the bottom.
5. Autoscroll to latest log line.
6. Infinite scroll and pagination for previous logs.
7. Display count of live logs below the fold with scroll-to-latest logs option.

### Metrics

1. Four charts (mix of line and area charts) rendered using apexcharts with React.
2. Time range based filtering of system logs similar to logs screen.
3. Select and drag over any section within a chart to view logs for the corresponding time range.

### Storybook

1. Hierarchical list of all components used.
2. Preview of all components.

## URL Scheme

1. Logs: `/logs/${timestamp}`
2. Metrics: `/metrics/${timestamp}`

## How to Run Project

```bash
npm i
```

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## How to Run Storybook

```bash
npm run storybook
```
