'use client';

import { useQuery } from 'convex/react';
import { useParams } from 'next/navigation';
import { api } from '@/convex/_generated/api';
import type { Id } from '@/convex/_generated/dataModel';
import { MenuIcon } from 'lucide-react';
import { Title } from './title';

interface NavbarProps {
	isCollapsed: boolean;
	onResetWith: () => void;
}

export const Navbar = ({
	isCollapsed,
	onResetWith
}: NavbarProps): React.ReactNode => {
	const params = useParams();
	const document = useQuery(api.documents.getById, {
		documentId: params.documentId as Id<'documents'>
	});

	if (document === undefined) {
		return (
			<nav className='bg-background dark:bg-[#1F1F1F] px-3 py-2 w-full flex items-center'>
				<Title.Skeleton />
			</nav>
		);
	}

	if (document === null) return null;

	return (
		<>
			<nav className='bg-background dark:bg-[#1F1F1F] px-3 py-2 w-full flex items-center gap-x-4'>
				{isCollapsed && (
					<MenuIcon
						role='button'
						onClick={onResetWith}
						className='h-6 w-6 text-muted-foreground'
					/>
				)}
				<div className='flex items-center justify-between w-full'>
					<Title initialData={document} />
				</div>
			</nav>
		</>
	);
};
