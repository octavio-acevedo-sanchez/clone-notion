'use client';

import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogContent,
	AlertDialogCancel,
	AlertDialogDescription,
	AlertDialogHeader,
	AlertDialogFooter,
	AlertDialogTitle,
	AlertDialogTrigger
} from '@/components/ui/alert-dialog';

interface ConfirmModalProps {
	children: React.ReactNode;
	onConfirm: () => void;
}

export const ConfirmModal = ({
	children,
	onConfirm
}: ConfirmModalProps): React.ReactNode => {
	const handleConfirm = (
		e: React.MouseEvent<HTMLButtonElement, MouseEvent>
	): void => {
		e.stopPropagation();
		onConfirm();
	};

	return (
		<AlertDialog>
			<AlertDialogTrigger onClick={e => e.stopPropagation()} asChild>
				{children}
			</AlertDialogTrigger>
			<AlertDialogContent>
				<AlertDialogHeader>
					<AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
					<AlertDialogDescription>
						This action cannot be undone.
					</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter>
					<AlertDialogCancel onClick={e => e.stopPropagation()}>
						Cancel
					</AlertDialogCancel>
					<AlertDialogAction onClick={handleConfirm}>Confirm</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	);
};
