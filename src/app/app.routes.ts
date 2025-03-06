import { Routes } from '@angular/router';

import { GraphComponent } from './graph/graph.component';
import { SidebarComponent } from './sidebar/sidebar.component';

export const routes: Routes = [
    {
        path: '',
        title: 'DPS Graph',
        component: GraphComponent,
    },
    {
        path: 'fake',
        title: 'yep',
        component: SidebarComponent,
    },
];
