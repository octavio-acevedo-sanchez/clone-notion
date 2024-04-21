'use client';

import { useMemo } from 'react';
import dynamic from 'next/dynamic';

import { useQuery } from 'convex/react';
import { api } from '@/convex/_generated/api';
import type { Id } from '@/convex/_generated/dataModel';
import { Toolbar } from '@/components/toolbar';
import { Cover } from '@/components/cover';
import { Skeleton } from '@/components/ui/skeleton';

interface DocumentPageIdPageProps {
	params: {
		documentId: Id<'documents'>;
	};
}

const DocumentPageIdPage = ({
	params
}: DocumentPageIdPageProps): React.ReactNode => {
	const Editor = useMemo(
		() =>
			dynamic(async () => await import('@/components/editor'), { ssr: false }),
		[]
	);

	const document = useQuery(api.documents.getById, {
		documentId: params.documentId
	});

	if (document === undefined) {
		return (
			<div>
				<Cover.Skeleton />
				<div className='md:max-w-3xl lg:max-w-4xl mx-auto mt-10'>
					<div className='space-y-4 pl-8 pt-4'>
						<Skeleton className='h-14 w-[50%]' />
						<Skeleton className='h-14 w-[80%]' />
						<Skeleton className='h-14 w-[40%]' />
						<Skeleton className='h-14 w-[60%]' />
					</div>
				</div>
			</div>
		);
	}

	if (document === null) {
		return <div>Not found</div>;
	}

	return (
		<div className='pb-40'>
			<Cover preview url={document.coverImage} />
			<div className='md:max-w-3xl lg:max-4xl mx-auto'>
				<Toolbar preview initialData={document} />
				<Editor
					editable={false}
					onChange={() => {}}
					initialContent={document.content}
				/>
			</div>
		</div>
	);
};

export default DocumentPageIdPage;
