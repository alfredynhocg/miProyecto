import { Routes } from '@angular/router';
import { PostList } from './post-list/post-list';
import { UiDemoComponent } from './ui-demo.component';

export const routes: Routes = [
	{
		path: '',
		component: PostList
	},
	{
		path: 'ui',
		component: UiDemoComponent
	}
];
