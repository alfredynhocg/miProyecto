import { Routes } from '@angular/router';
import { PostList } from './post-list/post-list';
import { UiDemoComponent } from './ui-demo.component';
import { NotFoundComponent } from './not-found.component';

export const routes: Routes = [
	{
		path: '',
		component: PostList
	},
	{
		path: 'ui',
		component: UiDemoComponent
	},
	{
		path: '**',
		component: NotFoundComponent
	}
];
