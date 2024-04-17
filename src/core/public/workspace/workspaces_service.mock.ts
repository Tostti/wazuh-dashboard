/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { BehaviorSubject } from 'rxjs';
import type { PublicMethodsOf } from '@osd/utility-types';

import { WorkspacesService, WorkspaceObject } from './workspaces_service';

const createWorkspacesSetupContractMock = () => {
  const currentWorkspaceId$ = new BehaviorSubject<string>('');
  const workspaceList$ = new BehaviorSubject<WorkspaceObject[]>([]);
  const currentWorkspace$ = new BehaviorSubject<WorkspaceObject | null>(null);
  const initialized$ = new BehaviorSubject<boolean>(false);
  return {
    currentWorkspaceId$,
    workspaceList$,
    currentWorkspace$,
    initialized$,
  };
};

const createWorkspacesStartContractMock = () => {
  const currentWorkspaceId$ = new BehaviorSubject<string>('');
  const workspaceList$ = new BehaviorSubject<WorkspaceObject[]>([]);
  const currentWorkspace$ = new BehaviorSubject<WorkspaceObject | null>(null);
  const initialized$ = new BehaviorSubject<boolean>(false);
  return {
    currentWorkspaceId$,
    workspaceList$,
    currentWorkspace$,
    initialized$,
  };
};

export type WorkspacesServiceContract = PublicMethodsOf<WorkspacesService>;
const createMock = (): jest.Mocked<WorkspacesServiceContract> => ({
  setup: jest.fn().mockReturnValue(createWorkspacesSetupContractMock()),
  start: jest.fn().mockReturnValue(createWorkspacesStartContractMock()),
  stop: jest.fn(),
});

export const workspacesServiceMock = {
  create: createMock,
  createSetupContract: createWorkspacesSetupContractMock,
  createStartContract: createWorkspacesStartContractMock,
};
